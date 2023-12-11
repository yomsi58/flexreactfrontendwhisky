import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseBrand, chooseProof, chooseAged, chooseGrain } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface ContactFormProps {
    id?:string;
    data?:{}
}

interface ContactState {
    brand: string;
    proof: string;
    aged: string;
    grain: string;
}

export const ContactForm = (props:ContactFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<ContactState>(state => state.brand);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseBrand(data.name));
            dispatch(chooseProof(data.email));
            dispatch(chooseAged(data.phone_number));
            dispatch(chooseGrain(data.address));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="brand">Whisky Brand</label>
                    <Input {...register('brand')} name="brand" placeholder='Brand'/>
                </div>
                <div>
                    <label htmlFor="proof">Proof</label>
                    <Input {...register('proof')} name="proof" placeholder='Proof'/>
                </div>
                <div>
                    <label htmlFor="aged">Year Made</label>
                    <Input {...register('aged')} name="Aged" placeholder='Year Made'/>
                </div>
                <div>
                    <label htmlFor="grain">Grains</label>
                    <Input {...register('grain')} name="grain" placeholder='Grains'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
