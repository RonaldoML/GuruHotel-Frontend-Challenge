import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from '../../redux/actions/search';
import { Detail } from '../Utility/Detail/Detail';

export const DetailModal = () => {
    const { back, business } = useSelector(state => state.search);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(goBack(true));
    };

    return (
        <div>
            <Dialog onClose={handleClose} fullWidth={true} aria-labelledby="customized-dialog-title" open={!back}>
                <DialogContent>
                    <Detail  business={business}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}
