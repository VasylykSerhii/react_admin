import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import * as Actions from 'store/actions'

import './Configuration.scss'
const Configuration = () => {
  const styles = {
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();


  const keyForm = useRef();
  const valueEdit = useRef();
  const dispatch = useDispatch();
  const [idEdit, setIdEdit] = useState('')
  const [openForm, setOpenForm] = useState(false)
  const [createForm, setCreateForm] = useState(false)


  const openEdit = (key, value, id) => {
    keyForm.current.value = key
    valueEdit.current.value = value
    setIdEdit(id)
    setOpenForm(!openForm)
  }

  const config = useSelector((state) => {
    return state.configuration.payload
  });
  const openCreateForm = () => {
    keyForm.current.value = 'Name'
    valueEdit.current.value = 'Value'
    setCreateForm(!createForm)
    setOpenForm(!openForm)
  }

  useEffect(() => {
    dispatch(Actions.fetchConfiguration())
  }, []);

  const updateConfig = () => {
    setOpenForm(!openForm)
    dispatch(Actions.updateConfiguration(idEdit, valueEdit.current.value))
  }

  const createConfig = () => {
    setCreateForm(!createForm)
    setOpenForm(!openForm)
    dispatch(Actions.createConfiguration(valueEdit.current.value, keyForm.current.value))
  }

  const deleteConfig = () => {
    setOpenForm(!openForm)
    dispatch(Actions.deleteConfiguration(idEdit))
  }

  return (
    config ?
      <div>
        <Card>
          <CardHeader color="primary">
            <div className='configuration__header'>
              <div className='configuration__title'>
                <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p>
              </div>
              <button onClick={openCreateForm} className='configuration__btn'>Create</button>
            </div>
          </CardHeader>
          <CardBody>
            <div className='configuration__table'>
              <div className='configuration__head'>
                <div className='configuration__row'>
                  <div className='configuration__index'>№</div>
                  <div className='configuration__key'>Name</div>
                  <div className='configuration__value'>Value</div>
                </div>
              </div>
              <div className='configuration__body'>
                {config.map((item, index) => {
                  return (
                    <div className={`configuration__row`}
                      key={item.id}
                      onDoubleClick={() => openEdit(item.key, item.value, item.id)}
                      onTouchEnd={() => openEdit(item.key, item.value, item.id)}
                    >
                      <div className='configuration__index'>{index + 1}</div>
                      <div className='configuration__key'>{item.key}</div>
                      <div className='configuration__value'>{item.value}</div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </CardBody>
        </Card>

        <div className={`modal ${openForm ? ' open' : ''}`}>
          <div className='modal__bg' onClick={() => setOpenForm(!openForm)}></div>
          <form className='modal__form'>
            <FontAwesomeIcon onClick={() => setOpenForm(!openForm)} className='modal__icon' icon={faTimes} />

            <h4>Configuratio Edit</h4>
            <input ref={keyForm} type='text' ></input>
            <textarea ref={valueEdit}>

            </textarea>
            {createForm ? 
              <input className='modal__btn create' type="button" value='Create' onClick={() => createConfig()}></input>
            :
              <div className='modal__btn-wrap'>
                <input className='modal__btn update' type="button" value='Edit' onClick={() => updateConfig()}></input>
                <input className='modal__btn delete' type="button" value='Delete' onClick={() => deleteConfig()}></input>
              </div>
            }
            
          </form>
        </div>
      </div>
      : null
  )
}


export default Configuration