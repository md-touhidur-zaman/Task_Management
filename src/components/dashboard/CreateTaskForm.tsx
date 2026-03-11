"use client"

import  { Dispatch, SetStateAction } from 'react'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from 'lucide-react'

const formSchema = z.object({
  title: z.string({message: "Provide a string"}).min(10, {message: "The title must be 10 character length"})
})

export default function CreateTaskForm({setOpen}: {setOpen: Dispatch<SetStateAction<boolean>>}) {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: ""
      }
    })

    const onSubmit = (e:z.infer<typeof formSchema>) => {
        console.log(e)
    }
   
  return (
     <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}  className="space-y-5 min-w-max">
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title" className='text-xl font-bold'>Title</FieldLabel>
              <Input
                {...field}
                className='min-w-full px-2 py-3 bg-background'
                placeholder="Enter your task title"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div className='flex justify-end items-center gap-3'>
        <Button variant={"outline"} type='button' className='cursor-pointer text-foreground' onClick={()=>setOpen(false)}>Cancel</Button>
        <Button variant={"outline"} className='bg-[#7DF9FF] border-0 hover:bg-[#7DF9FF]/80 cursor-pointer text-foreground font-bold'><Plus/> Add Task</Button>
      </div>
    </form>
  )
}
