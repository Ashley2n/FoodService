"use server";

import { db } from "@/lib/db/drizzle";
import { dishes, notes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function createDishForHandling(formData: FormData){
    // Include form validation with zod
    try{
    await db.insert(dishes).values({
        businessId: formData.get('business_id') as unknown as number,
        name: formData.get('name') as string,
        active: formData.get('isActive') as unknown as boolean,
        description: formData.get('discription') as string,
        image: formData.get('image') as string,
        price: formData.get('price') as string,
    });
    }
    catch (err) {
        console.log(err);
    };
    redirect("/menu");
}

export async function getAllNotes(){
  
    try {
      const response = await db.select().from(notes);
      return response
    } catch (error) {
      console.error("Failed to fetch Notes", error)
    //   console.log(error);
      return [];
    }
}


export async function GetAllDishes() {
    try{
        const res = await db
        .select()
        .from(dishes);
        // console.log(res);
        return res;
    } catch(err){
        console.log(err);
        throw err;
    } 
}

export async function GetDishById( id : number ) {
    try{
        const [res] = await db
        .select()
        .from(dishes)
        .where(eq(dishes.id, id));

        return res;

    } catch(err) {
        console.log(err);
        throw err;
    };
}