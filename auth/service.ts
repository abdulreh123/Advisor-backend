
const user = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../student/Model");
const chairman = require("../chairman/model");
const Advisor = require("../advisor/model");
const Department = require("../department/model");
const { Op } = require("sequelize");
export default class AuthService {
  constructor() { }
  /**
  * Authenticate user via form input
  * @param data { companyEmail:string, password:string }
  */
  async loginViaForm(data: any) {
    let status
    try {
      const { username, password } = data;
     const users = await user.findOne({
        where: { userName: username },
        include: [
          {
            model: Student,
            as: "Student",
            include: [
              {
                model: Advisor,
                as: "advisor",
                include: [
                  {
                    model: Department,
                    as: "Department"
                  },
              ]
              },
          ]},
          {
            model: chairman,
            as: "chairman",
            include: [
              {
                model: Department,
                as: "Department"
              },
          ]
          },
          {
            model: Advisor,
            as: "Advisor",
            include: [
              {
                model: Department,
                as: "Department"
              },
          ]
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
      if (users.userAdvisor) {
        status = "Advisor"
      }
      if (users.userStudent) {
        status = "Student"
      }
      if (users.userChairman) {
        status = "Chairman"
      }
      if (users.userSuperAdmin) {
        status = "SuperAdmin"
      }
      const token = await this.generateToken({
        userId: users.Advisor?.userId || users.Student?.userId || users.Chairman?.userId || users.userSuperAdmin,
        surname: users.Advisor?.surname || users.Student?.surname || users.Chairman?.surname || users.userSuperAdmin,
        department: users.Advisor?.Department || users.Student?.advisor.Department || users.Chairman?.Department || users.userSuperAdmin,
        status: status,
      });

      const result = {
        token,
        user: {
          userId: users.Advisor?.userId || users.Student?.userId || users.chairman?.userId || users.userSuperAdmin,
          username: users.userName,
          name: users.Advisor?.name || users.Student?.name || users.chairman?.name || users.name,
          surname: users.Advisor?.surname || users.Student?.surname || users.chairman?.surname || users.userSuperAdmin,
          department: users.Advisor?.Department || users.Student?.advisor.Department || users.chairman?.Department || users.userSuperAdmin,
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
  /**
* verify user
* @param param
*/
  async verifyUser(userName: string) {
    try {
      let status:string | undefined;
      const users = await user.findOne({
        where: {
          userName:userName
        },
             include: [
          {
            model: Student,
            as: "Student",
            include: [
              {
                model: Advisor,
                as: "advisor",
                include: [
                  {
                    model: Department,
                    as: "Department"
                  },
              ]
              },
          ]},
          {
            model: chairman,
            as: "chairman",
            include: [
              {
                model: Department,
                as: "Department"
              },
          ]
          },
          {
            model: Advisor,
            as: "Advisor",
            include: [
              {
                model: Department,
                as: "Department"
              },
          ]
          },
        ]
      })

      if (!users) throw Error("User Does not Exist!");
      if (users.userAdvisor) {
        status = "Advisor"
      }
      if (users.userStudent) {
        status = "Student"
      }
      if (users.userChairman) {
        status = "Chairman"
      }
      if (users.userSuperAdmin) {
        status = "SuperAdmin"
      }
      //  If user exist and activated
      //  Generate jwt token
      const token = await this.generateToken({
        user: {
          userId: users.Advisor?.userId || users.Student?.userId || users.Chairman?.userId || users.userSuperAdmin,
          surname: users.Advisor?.surname || users.Student?.surname || users.Chairman?.surname || users.userSuperAdmin,
          department: users.Advisor?.Department || users.Student?.advisor.Department || users.Chairman?.Department || users.userSuperAdmin,
          status: status,
        },
      });
      const result = {
        token,
        user: {
          userId: users.Advisor?.userId || users.Student?.userId || users.chairman?.userId || users.userSuperAdmin,
          username: users.userName,
          name: users.Advisor?.name || users.Student?.name || users.chairman?.name || users.name,
          surname: users.Advisor?.surname || users.Student?.surname || users.chairman?.surname || users.userSuperAdmin,
          department: users.Advisor?.Department || users.Student?.advisor.Department || users.chairman?.Department || users.userSuperAdmin,
          status: status,
        },
      };
      return result;
    } catch (error) {
      throw Error(error);
    }
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
