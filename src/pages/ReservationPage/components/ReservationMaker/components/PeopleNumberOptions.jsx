

function PeopleNumberOptions() {
    const options = [];
  
    for (let i = 1; i <= 50; i++) {
      options.push(
        <option key={i} value={i}>
          {i} {i === 1 ? 'person' : 'people'}
        </option>
      );
    }
  
    return options;
  }

  export default PeopleNumberOptions;