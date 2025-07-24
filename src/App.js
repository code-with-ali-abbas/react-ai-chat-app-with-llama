import "./App.css";
import { useState } from "react";
import ollama from "ollama/browser";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [prompt, setPrompt] = useState("");
  const [messageResponse, setMessageResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleChat = async () => {
    try {
      setLoading(true);
      const response = await ollama.chat({
        model: "llama3.2",
        messages: [{ role: "user", content: prompt }],
      });
      setLoading(false);
      setMessageResponse(response.message.content);
    } catch (error) {
      setFailed(true);
      setLoading(false);
      console.error(error.message);
      setMessageResponse("Failed to get response. Check console.");
    }
  };

  return (
    <div className="App">
      <Box
        sx={{
          width: "50%",
        }}
      >
        <h2 style={{ textAlign: "center", color: "white" }}>
          Let's chat with Llama 3.2
        </h2>
        <TextField
          id="outlined-multiline-flexible"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          multiline
          maxRows={4}
          autoFocus
          placeholder="Type you message here..."
          sx={{
            width: "100% !important",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#303030 !important",
              padding: "0px !important",
              color: "white",
            },
            "& .MuiInputBase-inputMultiline": {
              padding: "10.5px !important",
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleChat}
            disabled={!prompt}
            loading={loading}
            sx={{
              backgroundColor: "blue",
              color: "white",
              "&.Mui-disabled": {
                backgroundColor: "#4d4df0",
                color: "white",
              },
            }}
          >
            Send
          </Button>
        </Box>
        {messageResponse && (
          <p style={{ color: failed ? "red" : "white" }}>{messageResponse}</p>
        )}
      </Box>
    </div>
  );
}

export default App;
