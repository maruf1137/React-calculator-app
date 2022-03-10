import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    value: "7",
    name: "btn number",
  },
  {
    id: 2,
    value: "8",
    name: "btn number",
  },
  {
    id: 3,
    value: "9",
    name: "btn number",
  },
  {
    id: 4,
    value: "del",
    name: "btn del",
  },
  {
    id: 5,
    value: "4",
    name: "btn number",
  },
  {
    id: 6,
    value: "5",
    name: "btn number",
  },
  {
    id: 7,
    value: "6",
    name: "btn number",
  },
  {
    id: 8,
    value: "+",
    name: "btn operation",
  },
  {
    id: 9,
    value: "1",
    name: "btn number",
  },
  {
    id: 10,
    value: "2",
    name: "btn number",
  },
  {
    id: 11,
    value: "3",
    name: "btn number",
  },
  {
    id: 12,
    value: "-",
    name: "btn operation",
  },
  {
    id: 13,
    value: ".",
    name: "btn number",
  },
  {
    id: 14,
    value: "0",
    name: "btn number",
  },
  {
    id: 15,
    value: "/",
    name: "btn operation",
  },
  {
    id: 16,
    value: "*",
    name: "btn operation",
  },
  {
    id: 17,
    value: "reset",
    name: "btn reset",
  },
  {
    id: 18,
    value: "=",
    name: "btn equal",
  },
];

function App() {
  const [curDisplay, setCurDisplay] = useState("0");
  const [prevDisplay, setprevDisplay] = useState("");
  const [operation, setOperation] = useState("");

  const handleEqual = () => {
    const prev = parseFloat(prevDisplay);
    const cur = parseFloat(curDisplay);
    switch (operation) {
      case "+":
        setCurDisplay(prev + cur);
        break;
      case "-":
        setCurDisplay(prev - cur);
        break;
      case "/":
        setCurDisplay(prev / cur);
        break;
      case "*":
        setCurDisplay(prev * cur);
        break;
      default:
        return;
        break;
    }
    setprevDisplay("");
    setOperation("");
  };

  const handleCalc = (e) => {
    if (e.classList.contains("number")) {
      const { value } = e.dataset;
      if (value === "0") return;
      if (value === "." && curDisplay.includes(".")) return;
      if (curDisplay === "0") {
        setCurDisplay(value);
      } else {
        setCurDisplay(curDisplay.toString() + value);
      }
    }
    if (e.classList.contains("operation")) {
      const { value } = e.dataset;
      setOperation(value);
      console.log(value, operation);
      if (prevDisplay !== "") {
        handleEqual();
      } else {
        setprevDisplay(curDisplay + operation);
        setCurDisplay("0");
      }
    }
    if (e.classList.contains("reset")) {
      setprevDisplay("");
      setCurDisplay("0");
    }
    if (e.classList.contains("equal")) {
      handleEqual();
    }
    if (e.classList.contains("del")) {
      console.log("del");
      setCurDisplay(curDisplay.toString().slice(0, -1));
    }
  };

  useEffect(() => {
    if (curDisplay === "") setCurDisplay("0");
  }, [handleCalc]);

  return (
    <>
      <div className="calculator">
        <div className="calculator__display">
          <div className="prev-display">{`${
            prevDisplay === "" ? prevDisplay : prevDisplay + operation
          }`}</div>
          <div className="cur-display">{curDisplay}</div>
        </div>
        <div className="calculator__content">
          {data.map(({ id, value, name }) => {
            return (
              <button
                className={name}
                data-value={value}
                key={id}
                onClick={(e) => {
                  handleCalc(e.target);
                  // console.log(e.target.dataset.value);
                }}
              >
                {value}
              </button>
            );
          })}
          {/* <button class="btn" data-value>
            7
          </button>
          <button class="btn" data-value>
            8
          </button>
          <button class="btn" data-value>
            9
          </button>
          <button class="btn btn-del" data-del>
            del
          </button>
          <button class="btn" data-value>
            4
          </button>
          <button class="btn" data-value>
            5
          </button>
          <button class="btn" data-value>
            6
          </button>
          <button class="btn" data-operation>
            +
          </button>
          <button class="btn" data-value>
            1
          </button>
          <button class="btn" data-value>
            2
          </button>
          <button class="btn" data-value>
            3
          </button>
          <button class="btn" data-operation>
            -
          </button>
          <button class="btn" data-value>
            .
          </button>
          <button class="btn" data-value>
            0
          </button>
          <button class="btn" data-operation>
            /
          </button>
          <button class="btn" data-operation>
            *
          </button>

          <button class="btn btn-reset" data-reset>
            reset
          </button>
          <button class="btn btn-equal" data-equal>
            =
          </button> */}
        </div>
      </div>
    </>
  );
}

export default App;
