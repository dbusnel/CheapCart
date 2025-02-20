import "../style/storecard-styles.css";

/**
 * A listing for a single store
 * PROPS:
 *  - storeName:        the name of the store
 *  - storeAddress:     the address of the store
 *  - distanceMeters:   how far away the store is in meters
 */
export default function StoreCard(props) {
    return ( 
        <div className="card-container">
            <div className="name-distance-flexbox">
                <h1 className="app-text">{props.storeName}</h1>
                <p className="app-text distance-text"> {props.distanceMeters + " meters"}</p>
            </div>
            <br/>
            <p className="app-text address-text">{props.storeAddress}</p>
        </div>)
}