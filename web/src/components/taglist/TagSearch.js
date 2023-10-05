function TagSearch() {
    const options = [
        { value: "Alphabetical order", name: "Alphabetical order" },
        { value: "Ascending for level", name: "Ascending for level" },
        { value: "Descending for level", name: "Descending for level" },
        { value: "Ascending for the last study date", name: "Ascending for the last study date" },
        { value: "Descending for the last study date", name: "Descending for the last study date" },
    ]

    return  (
        <div>
            <input type="text" placeholder="Type Algorithm Tag" />
            <select>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TagSearch;