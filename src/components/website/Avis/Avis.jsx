import React, { useState } from 'react';
import StarIcon from "@mui/icons-material/Star";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { Rating as UiRating } from "@/components/ui";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
function Avis() {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(2);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleRatingChange = (event, newValue) => {
      setRating(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Get the values from the form
        const title = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
      
        // Validate the form data
        if (!title || !comment || !rating) {
          alert('Please fill out all fields and rate.');
          return;
        }
      
        // Do something with the form data (like send it to a server)
        console.log('Title:', title);
        console.log('Comment:', comment);
        console.log('Rating:', rating);
      
        // Close the dialog
        handleClose();
      };
  return (
    <div className=" ">
      <div className="flex justify-between items-center px-2">
        <div className="flex">
          <StarIcon className="text-yellow-400 text-3xl" />
          <div className="flex flex-col">
            <h1 className="font-xl font-bold text-white">4.5</h1>
            <h2 className="font-xl font-semibold text-[#9197B3] ">
              <span>33 Avis</span>
            </h2>
          </div>
        </div>
        <button onClick={handleClickOpen} className="bg-[#9197B3] text-white font-semibold flex gap-2 items-center justify-center  rounded-md px-4 py-2.5 ">
          <ChatBubbleOutlinedIcon />
          <span>Donner ton avis</span>
        </button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Donner ton avis</DialogTitle>
        <DialogContent>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={handleRatingChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button onClick={handleSubmit} color="primary">
      Submit
    </Button>
  </DialogActions>
      </Dialog>

      <div className="p-4 bg-[#4A6177] my-4 rounded-md">
        <div className="flex gap-2">
          <ChatBubbleOutlinedIcon className="text-white" />
          <h1 className="text-white text-lg font-semibold">
            Par Wahid Slimani, <span className="text-sm">15/05/2023</span>
          </h1>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <UiRating rate={5} />
          <h1 className="text-white text-lg font-semibold">
            Un Avocat très professionnel, je le recommande vivement
          </h1>
        </div>
        <p className="mt-3 text-white text-md">
          Abogado VAN SAINT, muchas gracias por todo el apoyo q recibí de usted
          y de todo su equipo, estoy muy contenta por todo lo q logró en mi caso
          del accidente de automóvil… Gracias…..Familia y amigos les recomiendo
          al abogado VAN SAINT Y EQUIPO….
        </p>
      </div>

      <div className="p-4 bg-[#4A6177] my-4 rounded-md">
        <div className="flex gap-2">
          <ChatBubbleOutlinedIcon className="text-white" />
          <h1 className="text-white text-lg font-semibold">
            Par Wahid Slimani, <span className="text-sm">15/05/2023</span>
          </h1>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <UiRating rate={5} />
          <h1 className="text-white text-lg font-semibold">
            Un Avocat très professionnel, je le recommande vivement
          </h1>
        </div>
        <p className="mt-3 text-white text-md">
          Abogado VAN SAINT, muchas gracias por todo el apoyo q recibí de usted
          y de todo su equipo, estoy muy contenta por todo lo q logró en mi caso
          del accidente de automóvil… Gracias…..Familia y amigos les recomiendo
          al abogado VAN SAINT Y EQUIPO….
        </p>
      </div>
    </div>
  );
}

export default Avis;
