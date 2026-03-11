import React, { Dispatch, SetStateAction } from 'react'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Controller, useForm } from 'react-hook-form'

export default function CreateTaskForm({setOpen}: {setOpen: Dispatch<SetStateAction<boolean>>}) {
    const form = useForm()

    const onSubmit = (e: any) => {
        console.log(e)
    }
   
  return (
     <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}  className="space-y-5">
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">Title</FieldLabel>
              <Input
                {...field}
                className='min-w-max'
                placeholder="Enter your task title"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div>
        <Button type='button' onClick={()=>setOpen(false)}>Cancel</Button>
      </div>
    </form>
  )
}
