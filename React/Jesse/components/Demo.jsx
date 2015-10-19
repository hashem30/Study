var Demo = React.createClass({
        render: function() {
            var radioOptions = [
                { value: 'newspaper', label:'Newspaper1a'},
                { value: 'radio', label:'Radio2a'},
                { value: 'tv', label:'Television3a'},
                { value: 'search', label:'Search Engine4a'},
                { value: 'social', label:'Social Media5a'},
            ];
            return (
                <div className="container">
                    <h1>React.js Radio Group Demo</h1>
                    <form>
                        <p className="h3">How did you hear about us?</p>
                        <RadioOptionGroup name="referrer" other={true} options={radioOptions}/>
                        <p><input type="submit"/></p>
                    </form>
                </div>
            );
        }
    }
)