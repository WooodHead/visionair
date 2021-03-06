import React, {Component} from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'reactstrap';
import Link from 'next/link';

export default class LinkDropDown extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render(){
        return(
            <Dropdown isOpen={this.state.dropdownOpen} onMouseLeave={this.toggle} toggle={this.toggle}>
                <span onMouseOver={this.toggle} data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                    {this.props.children}
                </span>
                <DropdownMenu>
                    {this.props.dropdownItems.map(item => (
                    <DropdownItem>
                        <Link href={item.path}>{item.title}</Link>
                    </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        )
    }
}
