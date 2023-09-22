const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () =>{
    try{
        //column unique
        // const result = await prisma.product.findUnique({
        //     where :{
        //         id:8
        //     }
        // })

        // const result = await prisma.product.findUniqueOrThrow({
        //     where:{
        //         id:2
        //     }
        // })

        // const result = await prisma.product.findUniqueOrThrow({
        //     where:{
        //         id:2000
        //     }
        // })
        // const result = await prisma.product.findFirst({

        // })
        // const result = await prisma.product.findUniqueOrThrow({
        //     where:{
        //         price :{
        //            lt : 10000 
        //         }
        //     }
        // });
        // const result = await prisma.product.findFirst({
        //     where:{
        //         price :{
        //            lt : 10000 
        //         }
        //     }
        // });

        // const result = await prisma.product.findMany();
        // //findMany return Array
        // const result = await prisma.product.findMany({
        //     where:{
        //         id:100
        //     }
        // });
        // const  result = await prisma.brand.findMany({
        //     where:{
        //         id:{
        //             not:4
        //         }
        //     }
        // })
        // const  result = await prisma.brand.findMany({
        //     where:{
        //         id:{
        //             in: [ 10 , 11 , 18 , 22 ]
        //         }
        //     }
        // })
        // const  result = await prisma.brand.findMany({
        //     where:{
        //         id:{
        //           notIn: [ 2 , 4 , 6  ]
        //         }
        //     }
        // })

        // const  result = await prisma.user.findMany({
        //     where:{
        //      username:{
        //         contains:'a'
        //      }
        //     }
        // })
        // const result = await prisma.product.findMany({
        //     where :{
        //         name:{
        //             startsWith:'i'
        //         },
        //         price:{
        //             gt: 55000
        //         }
        //     }
        // });
        // const  result = await prisma.product.findMany({
        //     where:{
        //         OR:[
        //             {brandId:2},
        //             {brandId:3}
        //         ]
        //     }
        // })
        //Between
        // const result = await prisma.product.findMany({
        //     where:{
        //         AND:[ { price:{ gt:30000 } },{ price:{ lt:40000 } } ]
        //     }
        // })

        //############select some columns
        // const result = await prisma.user.findMany({
        //     select:{
        //         username:true,
        //         id:true,
        //         role:true
        //     }
        // })
//###########include ได้ product ต้องสัมพันธ์กัน
//##########select brand ได้ brand id 6 - huawei
// const result = await prisma.brand.findMany({
//     where:{
//         id:6
//     },
//     include:{
//         // product:true
//         product:{
//             select:{
//                 id:true,
//                 name:true,
//                 price:true
//             }
//         }
//     }
// })
// console.log(JSON.stringify(result,null,2));

// ############5 Level 5table
// const result = await prisma.user.findMany({
//     where :{
//         id:2
//     },
//     include:{
//         order:{
//             include:{
//                 orderitem:{
//                     include:{
//                         product:{
//                             include:{
//                                 brand:true
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// })
// console.log(JSON.stringify(result,null,2));

// ##########select cannot do  with include in same Level
//#######อยากใช้ คู่กันต้องเลือก select แบบนี้
// const result = await prisma.brand.findMany({
//     where:{
//         id:1
//     },
//     // select:{
//     //     product: true
//     //     //brand information will not show
//     //     //เลือกเอาเฉพาะ key ของตัวนั้น ว่า brand มี key อะไรบ้าง
//     // },
//     include :{//จะบอกว่าเป็น แบรนอะไร รุ่นไหน
//         product:true
//     }
// })

// const result = await prisma.brand.findMany({
//     where:{
//         id:1
//     },
//     select:{
//         id:true,
//         name:true,
//         product:{
//             select:{
//                 id:true,
//                 name:true,
//                 price:true
//             }
//         }
//     }
// })

//################Apple price > 55,000

// const result = await prisma.brand.findFirst({
//     where:{id:1},
//     include:{
//         product:{
//             where:{
//                 price:{
//                     gt:55000
//                 }
//             }
//         }
//     }
// })

// #########order
// const result =await prisma.product.findMany({
//     orderBy:{
//         // value in this orderBy can be 2 which is 'desc' 'asc'
//         price:'desc'
//     },
//     take : 5, // limit
//     skip : 10 // offset
// })
//  ####### count
// const result =await prisma.user.aggregate({
//     _count:{
//         id:true
//     },
//     where :{
//         role:{
//             not:'ADMIN'
//         }
//     }
// })

//  ############group by 
const result = await prisma.product.groupBy({
    by:'brandId',
    _max:{
        price:true
    },
    having:{
        price:{
            _max :  {
                gt: 40000
            }
        }
    }
})

  console.log(JSON.stringify(result,null,2));
    }catch(err){
        console.log(err)
    }
};

run()
