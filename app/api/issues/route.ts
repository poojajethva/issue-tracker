import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/prisma/client'
import { createIssueSchema } from "../../validationSchemas";

export async function POST(request:NextRequest) {
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})
    const { title, desc } = validation.data
    const newIssue = prisma.issue.create({
        data: {title, desc}
    })
    return NextResponse.json(newIssue, {status: 201})
}