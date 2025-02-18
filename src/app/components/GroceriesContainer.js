"use client"

import React from 'react';
import '../style/container-styles.css';

/**
 * This is the container component for the groceries list.
 * User can add groceries to the list and remove them.
 */
export default function GroceriesContainer() {
    const [cItems, ChangeItems] =  React.useState([]);
    return (
        <div className="container-border">
            <CurrentItemsListPart />
            <ContainerTextInputPart placeholderText="Enter an item" />
        </div>);
}



/**
 * PROPS:
 *  placeholderText: The text that will be displayed in the input field.
 */
function ContainerTextInputPart(props) 
{
    return (
        <div className="container-input-box">
            <input className="container-input-box" placeholder={props.placeholderText} />
        </div>
    );
}

function CurrentItemsListPart(props) 
{
    return (
    <div className="container-items-list-box">
        <SingleGroceryItem itemName="Apples" RemoveItem={() => console.log("Removing Apples")} />
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
            <p className='single-item-close-button' onClick={props.RemoveItem(props.itemName)}>✕</p>
        </div>
    );
}