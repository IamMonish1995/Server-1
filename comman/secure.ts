// import path from 'path';
// import fs from 'fs';

// export const moveFileFunction = async (reqFile: any, reqPath: any) => {
//     const fileUrl = await new Promise(function (fulfill, reject){
//         const fileName =  Date.now() + path.extname(reqFile.name);
//         reqFile.mv(`./public/${reqPath}` + fileName, (error: any) => {
//             if (error) {
//                 reject(false);
//             }
//             fulfill(fileName);
//         })
//     });
//     return (fileUrl) ? reqPath + fileUrl : '';
// }

// export const removeFile = async (reqPath: any) => {
//     fs.unlink(`./public/${reqPath}`, (err) => {
//         if (err) {
//             return
//         }
//     })
// }