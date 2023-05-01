import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(3),
    surName: z.string().min(3),
})

type FormData= z.infer<typeof schema>

const Form = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" />
      {errors.name && <p className='danger'>{errors.name?.message}</p>}
      <input {...register("surName")} type="text" />
      {errors.surName && <p className='danger'>{errors.surName?.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
