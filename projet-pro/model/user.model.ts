import {prisma} from '@/lib/prisma'

export class UserModel{
    static async findAll(){
        return await prisma.user.findMany({
            orderBy:{createdAt:'desc'},
            select : {
                id:true,
                name: true,
                email:true,
                createdAt:true,
                updateAt:true,
            }
        })
    }

    static async findById(id:string){
        return await prisma.user.findUnique({
            where:{id},
            
        })
    }
}

