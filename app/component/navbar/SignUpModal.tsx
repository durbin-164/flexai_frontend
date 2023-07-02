import React, { useState } from 'react';
import { Button, TextField, Typography, Modal , Box} from "@mui/material";
import CustomButton from "@/app/component/CustomButton";
import Backdrop from '@mui/material/Backdrop';
import SignInModal from "@/app/component/navbar/SignInModal";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function SignUpModal() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUp = () => {
        // Perform signup logic here
        console.log(`Signing up with email: ${email}, password: ${password}`);
        // Close the modal
        handleClose();
    };

    return (
        <Box>
            <CustomButton text="Sign Up" onClick={handleOpen}/>
            <Modal onClose={handleClose} open={open}
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               // open={open}
               // onClose={handleClose}
               closeAfterTransition
               slots={{ backdrop: Backdrop }}
               slotProps={{
                   backdrop: {
                       timeout: 500,
                   },
               }}

            >
                <Box sx={style}>
                    <Typography variant="h2">Sign Up</Typography>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" onClick={handleSignUp}>
                        Sign Up
                    </Button>
                    <Typography variant="body1">
                        Already have an account? <SignInModal />
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
};

export default SignUpModal;
