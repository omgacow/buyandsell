import React from 'react';
import ItemEntry from './ItemEntry';

class ItemList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='item-list-wrapper'>
                <div className='container'>
                    <div className='row' >
                        {this.props.items.map((item, index) => 
                            <div className='col-lg-4' key={index}>
                                <ItemEntry item={item} select={this.props.select} clicked={this.props.clicked} email={this.props.email} clicked={this.props.clicked}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemList;