import React, { useEffect, useRef, useState } from 'react'
import '../../style/Caraousel.scss'
import ADDICON from '/icon/addImage.png'

import axios from 'axios'
import { baseUrl } from '../../../../utils/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import useGetAllServices from '../../../../hooks/GetAllServices';
import { setServices } from '../../../../redux/serviceSlice';

function Caraousel() {
 

  const { currentAuthUser } = useSelector(store => store.auth)

  // checking auth user
  const isAdmin = currentAuthUser?.role === 'admin'

  const { services } = useSelector(store => store.service)
  const [apiMessage, setApiMessage] = useState('')

  const dispatch = useDispatch();


  useGetAllServices()

  const [currentIndex, setCurrentIndex] = useState(1);
  const [addBtn, setAddBtn] = useState(false);
  const [dialogueBox, setDialogueBox] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [form, setForm] = useState({
    title: '',
    image: '',
    short_desc: '',
    desc: ''
  })
  const ref = useRef();


  const triggerAnimation = (callback) => {
    setAnimating(true);
    setTimeout(() => {
      callback();
      setAnimating(false);
    }, 500); // Match with CSS animation duration
  };

  const goPrev = () => {
    triggerAnimation(() => {
      setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    });
  };

  const goNext = () => {
    triggerAnimation(() => {
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    });
  };



  const getLeftImageNumber = () => {
    if (currentIndex === 0) {
      return services.length - 1;
    }
    return currentIndex - 1;
  }
  const getRightImageNumber = () => {
    if (currentIndex === services.length - 1) {
      return 0;
    }
    return currentIndex + 1;
  }

  const isLastImage = currentIndex === services.length - 1

  const cancelHandler = () => {
    setDialogueBox(!dialogueBox)
    setForm({
      title: '',
      image: '',
      short_desc: '',
      desc: ''
    })
  }


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({
          ...prev,
          imagePreview: reader.result, // for UI preview
          image: file                 // this is important!
        }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', form.title);
    formData.append('short_desc', form.short_desc);
    formData.append('desc', form.desc);
    formData.append('image', form.image);  // very important!

    try {
      const res = await axios.post(`${baseUrl}/api/service/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      if (res.data.success) {
        cancelHandler();
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error?.response?.data?.message || 'Error occurred');
    }
  };

  const deleteHandler = async (deletId) => {
    try {
      const res = await axios.delete(`${baseUrl}/api/service/delete/${deletId}`);
      if (res.data.success) {
        const updatedServices = services.filter(card => card._id !== deletId);
        dispatch(setServices(updatedServices));
        setApiMessage(res.data.message)
      }
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setApiMessage('');
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (

    <>


      <div className='caraousel'  >
        {/* <div className="caraouselbox1 CB13"> */}
        <div className={`caraouselbox1 CB13 `}>

          <div className="for_Box1_CB2_heading">
            <h2> {services[currentIndex]?.heading} </h2>
          </div>
          <div className={`box1_image ${animating ? 'slide-left' : ''} `}>
            <img src={services[getLeftImageNumber()]?.image} alt="" />
          </div>
        </div>
        {/* <div className="caraouselbox2"> */}
        <div className={`caraouselbox2`}>

          <div className={`box2_image  ${animating ? 'slide-left' : ''} `}>
            <img src={services[currentIndex]?.image} alt="" />
          </div>
          <div className="caraousel_action">
            {/* <button onClick={() => goPrev()} disabled={currentIndex === 0} >←</button> */}
            <button onClick={() => goPrev()}>←</button>
            <span>{currentIndex + 1}</span>
            {/* <button onClick={() => goNext()} disabled={isLastImage} >→</button> */}
            <button onClick={() => goNext()}>→</button>
          </div>
        </div>
        {/* <div className="caraouselbox3 CB13" */}
        <div className={`caraouselbox3 CB13`}
          onMouseEnter={() => setAddBtn(true)}
          onMouseLeave={() => setAddBtn(false)}
        >
          {apiMessage && <small style={{ color: 'orange' }} >{apiMessage}</small>}
          {addBtn && isAdmin && (
            <>

              <button className="add_caraousel_form_btn" onClick={() => setDialogueBox(!dialogueBox)} >
                Add +
              </button>
              <button className="add_caraousel_form_btn" style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteHandler(services[currentIndex]?._id)} >Delete</button>
            </>
          )}
          <div className={`box3_image  ${animating ? 'slide-left-down' : ''} `}>
            <img src={services[getRightImageNumber()]?.image} alt="" />
          </div>
          <div className="for_box2_content">
            <p>{services[currentIndex]?.short_desc}</p>
          </div>
        </div>

        {/* dialogue  start */}

        {dialogueBox &&
          <div className='add_caraousel_form'>
            <div className="add_craousel_image" onClick={() => ref.current.click()}>
              {form.imagePreview ? (
                <img src={form.imagePreview} alt="preview" />
              ) : (
                <img src={ADDICON} alt="Add icon" />
              )}

              <input
                ref={ref}
                type="file"
                name="image"
                hidden
                onChange={handleFileChange}
              />
            </div>
            <div className="add_caraousel_details">
              <input
                type="text"
                placeholder="Title"
                className="textInput"
                value={form.title}
                onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
              />
              <div className="text_desc">
                <span>Quick Lines</span>
                <textarea
                  placeholder="Quick Lines"
                  value={form.short_desc}
                  onChange={(e) => setForm(prev => ({ ...prev, short_desc: e.target.value }))}
                />

              </div>
              <div className="text_desc">
                <span>Description</span>
                <textarea
                  placeholder="Description"
                  value={form.desc}
                  onChange={(e) => setForm(prev => ({ ...prev, desc: e.target.value }))}
                />
              </div>
              {isAdmin &&
                <div className="form_action_btn">
                  <button className='action_cancel' onClick={() => cancelHandler()} >Cancel</button>
                  <button className='action_add' onClick={handleSubmit}>Add</button>
                </div>
              }
            </div>
          </div>
        }

        {/* dialogue  end */}
      </div>

    </>
  )
}

export default Caraousel