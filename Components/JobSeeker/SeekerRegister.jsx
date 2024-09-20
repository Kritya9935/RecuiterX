import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(2).max(10),
    image: yup.mixed(),
    email: yup.string().required().email(),
    contact:yup.string().required(),
    qualification:yup.string().required(),
    location:yup.string().required(),
    password: yup.string().required(),
    preference:yup.string().required(),
    resume: yup.mixed().required(),
  })

 function SeekerRegister(){

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
      const handleData=async(data)=>{
               const formData=new FormData();
               formData.append('name',data.name);
               formData.append('image',data.image[0]);
               formData.append('email',data.email);
               formData.append('contact',data.contact);
               formData.append('password',data.password);
               formData.append('qualification',data.qualification);
               formData.append('location',data.location);
               formData.append('prefrence',data.preference);
               formData.append('resume',data.resume[0])
        axios.post("http://localhost:9000/api/seeker-register",formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            } 
        }
        ) 
        alert("Register successfull !..")
      }

    return(<>
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            <div className="row">
                <div className="col-sm-6 form_div_register recuiter_register">
                img   {/* <div className="register_img"> <img src={Img} /></div> */}
                </div>
                <div className="col-sm-6 form_div_register ">
                    <h2 className="recruiter_signUp_text">Seeker SingUp</h2>
                <div className="p-4">
                <form onSubmit={handleSubmit(handleData)}>
                <div className="row mb-4">
                    <input  className="form-control " 
                    placeholder="Enter Your Name"
                    type="text"
                    {...register('name')}
                    />
                     {errors.name?.message && <span  className='error_msg'>{errors.name?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control "  
                    type="file"
                    {...register('image')}
                    />
                     {errors.image?.message && <span  className='error_msg'>{errors.image?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control "  
                    type="email"
                    placeholder="Enter Your Email"
                    {...register('email')}
                    />
                     {errors.email?.message && <span  className='error_msg'>{errors.email?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control "  
                    type="password"
                    placeholder='Enter Your Password'
                    {...register('password')}
                    />
                     {errors.password?.message && <span  className='error_msg'>{errors.password?.message}</span>}
                </div>

                <div className="row mb-4">
                    <input  className="form-control "  
                    type="number"
                    placeholder='Enter Your Contact'
                    {...register('contact')}
                    />
                     {errors.contact?.message && <span  className='error_msg'>{errors.contact?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control "  
                    type="text"
                    placeholder='Enter Your Qualification'
                    {...register('qualification')}
                    />
                     {errors.qualification?.message && <span  className='error_msg'>{errors.qualification?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control "  
                    type="text"
                    placeholder='Enter Your Location'
                    {...register('location')}
                    />
                     {errors.location?.message && <span  className='error_msg'>{errors.location?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control "  
                    type="text"
                    placeholder='Enter Your Job Prefrence'
                    {...register('preference')}
                    />
                     {errors.preference?.message && <span  className='error_msg'>{errors.preference?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control "  
                    type="file"
                    placeholder='Enter Your Job Prefrence'
                    {...register('resume')}
                    />
                     {errors.resume?.message && <span  className='error_msg'>{errors.resume?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="register_submit form-control " 
                    type="submit"
                    value="SignUp"
                    />
                </div>
                </form>     
                </div>
                </div>
            </div>
        </div>
        <div className="col-sm-1"></div>
    </div>
    </>)
 }

 export default SeekerRegister;