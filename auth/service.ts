
// const user = require("./model");

// export default class DepartmentService {
//   constructor() {}
//   //  Create Department
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
//   //  Get Departments
//   getDepartments = async (): Promise<any> => {
//     try {
//       const departments = await DepartmentModel.findAll({ });
//       return departments;
//     } catch (error) {
//       // throw new Error(error);
//       throw new Error("An Error occurred while fetching departments!");
//     }
//   };
//   //  Get Department
//   getDepartment = async (departmentId: number): Promise<any> => {
//     try {
//       const result = await DepartmentModel.findByPk(departmentId, {
//         include:[
//           {
//             model:Courses,
//             as: "courses"
//           }
//         ]
//       });
//       return result;
//     } catch (error) {
//       throw error;
//       throw new Error("An Error occurred while fetching department!");
//     }
//   };
//   //  Update Department
//   updateDepartment = async (
//     departmentId: number,
//     data: any,
//   ): Promise<any> => {
//     try {
//       const department = await this.getDepartment(departmentId);
//       await DepartmentModel.update(
//         { ...data },
//         { where: { id: departmentId } }
//       );
//       return department;
//     } catch (error) {
//       throw new Error("An Error occurred while updating departments!");
//     }
//   };
//   //  Delete Department
//   deleteDepartment = async (
//     departmentId: number,
//   ): Promise<any> => {
//     try {
//       const department = await DepartmentModel.findOne({
//         where: {
//           id: departmentId,
//         },
//         paranoid: false,
//       });
//       department.destroy();
//       return { message: "Department record deleted!" };
//     } catch (error) {
//       throw new Error("An Error occurred while deleting departments!");
//     }
//   };
// }
