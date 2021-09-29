
const user = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../student/Model");
const chairman = require("../chairman/model");
const advisor = require("../advisor/model");
export default class AuthService {
  constructor() {}
  //  Create Department
//   verify = async (username: any,password:number): Promise<any> => {
//     try {
//         const login = user.findOne({where:{username:username}})
//         if (!login) throw Error("User Does not Exist!");
//       return login;
//     } catch (error) {
//       throw error;
//       // throw new Error("An Error occurred while creating department!");
//     }
//   };
   /**
   * Authenticate user via form input
   * @param data { companyEmail:string, password:string }
   */
    async loginViaForm(data: any) {
        let users;
        let id;
        let status
        try {
          const {  username, password } = data;
          users = await user.findOne({where:{userName:username},
        include:[
            {
              model:Student,
              as:"Student"
            },
            {
              model:chairman,
              as:"chairman"
            },
            {
              model:advisor,
              as:"Advisor"
            },
        ]
        });
          if (!users) throw Error("Invalid Credentials");
          const comparePassword = await this.comparePassword(
            password,
            users.password
          );
          if (!comparePassword) {
            throw Error("Invalid Credentials");
          }
          if(users.userAdvisor){
              id=users.Advisor?.userId
              status="Advisor"
          }
          if(users.userStudent){
              id=users.Student?.userId 
              status="Student"
          }
          if(users.userChairman){
              id=users.Chairman?.userId
              status="Chairman"
          }
          if(users.userSuperAdmin){
              status="SuperAdmin"
          }
          const token = await this.generateToken({
            id: id,
            status: status,
          });
          const result = {
            token,
            user: {
                id: id,
              status: status,
            },
          };
    
          return result;
        } catch (error) {
          throw Error(error);
        }
      }
      protected async comparePassword(
        input: string,
        compare: string
      ): Promise<boolean> {
        const match = await bcrypt.compare(input, compare);
        return match;
      }
  //  Generate jwt token
  protected generateToken = async (data: any): Promise<any> => {
    try {
      const token = await jwt.sign(data, "neuAdvisor", {
        expiresIn: 36000,
      });
      return token;
    } catch (error) {
      throw Error(error);
    }
  };
}
