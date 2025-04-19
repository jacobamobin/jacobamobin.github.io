export default function Language({ language, colour }) {
    return (
      <div className="ml-4 mb-5 flex items-center">
        {/* Blue circle */}
        <div
        style={{
            width: "9px",     
            height: "9px",   
            borderRadius: "50%", 
            backgroundColor: colour, 
            marginRight: "5px",  
          }}
        ></div>
        <div className="h-auto text-xs">{language}</div>
      </div>
    );
  }
  