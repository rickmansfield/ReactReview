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

//React class component with inline export
import React, { Component } from 'react'
export default class classComponents extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

//React calss component with export at the bottom
import React, { Component } from 'react'
export class classComponents extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default classComponents

