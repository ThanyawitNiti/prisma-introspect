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
        const  result = await prisma.product.findMany({
            where:{
                OR:[
                    {brandId:2},
                    {brandId:3}
                ]
            }
        })

        console.log(result)
    }catch(err){
        console.log(err)
    }
};

run()
