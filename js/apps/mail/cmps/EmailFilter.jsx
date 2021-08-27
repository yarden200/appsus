export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            searchEmail: '',
            isRead: null
        },
    };

    handleChange = (ev) => {
        console.log('(1)input gets:', ev.target.value, 'type:', typeof ev.target.value);
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };

    onFilter = (ev) => {
        ev.preventDefault();
    }

    render() {
        const { searchEmail } = this.state.filterBy
        return (
            <section className="email-filter">
                <form className="email-filter-form" onSubmit={this.onFilter}>
                    <label htmlFor='search-email'></label>
                    <input name='searchEmail' id='search-email' type='text' placeholder='Search Mail' value={searchEmail} onChange={this.handleChange} />
                   

                    {/* <button>Search</button> */}
                </form>
            </section>
        )
    }
}
