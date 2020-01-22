import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function ListStyler(props) {

  const listStyles = useSelector(state => state.listStyles);
  const selectedListStyle = useSelector(state => state.listStyle);

  const dispatch = useDispatch();

  function setStyle(e) {
    // Pass data into a particular store reducer action
    dispatch({ type: 'SET_STYLE', payload: e})
    
    console.log("List style set to: " + e);
  }

  

  return (
    <Tabs  defaultIndex={selectedListStyle}
    onSelect={
    index => {
      console.log("clicked item: " + index)
      setStyle(index)
    }
    }>
    <TabList>

    {listStyles.map( (item, index) => (
       <Tab key={index}><h2>{item.bullet}</h2><h5>{item.title}</h5></Tab>
      ))}
    </TabList>

    {listStyles.map( (item, index) => (
       <TabPanel key={index}></TabPanel>
      ))}


  </Tabs>

  );
}