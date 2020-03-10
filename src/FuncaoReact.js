import React, {useState, useEffect} from 'react';

const FuncaoReact = (props) => {
  const [ingrediente, setIngrediente] = useState('maca');  
  
  useEffect(() => {
    return () => console.log('atualizei: ');
  }, []);

  const handleClick = () => {
    setIngrediente('banana');
  };

  return(
    <div onClick={handleClick}>
      {ingrediente}
    </div>
  );
};

export default FuncaoReact;