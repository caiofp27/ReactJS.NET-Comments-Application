import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { comments: [], loading: true };
    }

    componentDidMount() {
        this.populateCommentsData();
    }

    static renderCommentsTable(comments) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Comment</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comment =>
                        <tr key={comment.id}>
                            <td>{comment.comment}</td>
                            <td>{comment.author}</td>
                            <td>{comment.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderCommentsTable(this.state.comments);

        return (
            <div>
                <h1 id="tabelLabel">Commets</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateCommentsData() {
        const response = await fetch('getcomments');
        const data = await response.json();
        this.setState({ comments: data, loading: false });
    }
}
