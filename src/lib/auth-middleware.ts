import { NextRequest, NextResponse } from "next/server";
import {auth} from "@/lib/auth"

export async function getSession(request:NextRequest){
    try{
        const session = await auth.api.getSession({
            headers: request.headers
        })
        return session
    } catch {
        return null
    }
}

export async function requireAuth(request:NextRequest){
    const session = await getSession(request)

    if(!session){
        return NextResponse.json(
            {error: "authentification requise"}, 
            {status:401}
        )
    }
    return session
}