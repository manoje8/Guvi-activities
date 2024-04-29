const SelectionHeader = ({children}) => {
    return (
        <div className='shopping-column'>
        <section className='selection'>
            <div className='selection-header'>
                <h2 className='sub-title'>YOUR SELECTIONS</h2>
                {children}
            </div>
        </section>
    </div>
    );
  };
  
  export default SelectionHeader;