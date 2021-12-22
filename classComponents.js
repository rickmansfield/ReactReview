//classic Class Component
class nameHereLikeCard extends React.Component {
    render() {
        return <div></div>;
    }
}

export default nameHereLikeCard;

// classic Class Component with constructor
class nameHere extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default nameHere;
import React, { Component } from 'react'

//React class component with inline export
export default class classComponents extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

import React, { Component } from 'react'

//React calss component with export at the bottom
export class classComponents extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default classComponents

ccc
