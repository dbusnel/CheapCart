"use client"

import React from 'react';
import '../style/container-styles.css';

/**
 * This is the container component for the groceries list.
 * User can add groceries to the list and remove them.
 */
export default function GroceriesContainer() {
    const [cItems, ChangeItems] =  React.useState([]);

    const addItem = (value) => {
        if (!cItems.includes(value)) {
            ChangeItems(cItems.concat(value));
        }
        console.log(cItems);
    };

    const removeItem = (value) => {
        ChangeItems(cItems.filter((item) => item != value));
        console.log(cItems);
    }

    return (
        <div className="container-border">
            <CurrentItemsListPart items={cItems} RemoveItem={removeItem}/>
            <ContainerTextInputPart placeholderText="Enter an item" addItemFunction={addItem} />
        </div>);
}

/**
 * PROPS:
 *  placeholderText: The text that will be displayed in the input field.
 *  addItemFunction: The function that will be called when the user presses 'Enter' in the input field.
 */
function ContainerTextInputPart(props) 
{
    const handleKeyDown = (event) => {
        if (event.key == 'Enter') {
            props.addItemFunction(event.target.value);
        }
    }

    return (
        <div className="container-input-box">
            <input className="container-input-box" placeholder={props.placeholderText} onKeyDown={handleKeyDown}/>
        </div>
    );
}

/**
 * 
 * PROPS:
 *  - Items: the items to display in the container
 *  - RemoveItem: the function to remove an item from the list.
 */
function CurrentItemsListPart(props) 
{
    return (
        <div className="container-items-list-box">
            {props.items != null && props.items.map((item) => <SingleGroceryItem itemName={item} RemoveItem={props.RemoveItem} key={item}/>)}
        </div>);
}

/**
 * A single item to be displayed. Can be closed by clicking 'X'
 * PROPS:
 *  - itemName: The name of the item to be displayed.
 *  - RemoveItem: A function that removes the item from the list container.
 */
function SingleGroceryItem(props) 
{
    return (
        <div className='single-item-container'>
            <p className='single-item-name'>{props.itemName}</p>
            <p className='single-item-close-button' onClick={() => props.RemoveItem(props.itemName)}>✕</p>
        </div>
    );
}