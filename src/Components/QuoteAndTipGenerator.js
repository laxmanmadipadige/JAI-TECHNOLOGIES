import React, { useState } from "react";
import "./QuoteAndTipGenerator.css"; // Importing CSS file for styling

// Main Component
const QuoteAndTipGenerator = () => {
  const [customQuote, setCustomQuote] = useState("");
  const [generatedQuote, setGeneratedQuote] = useState(
    "The only way to do great work is to love what you do."
  );
  const [customTip, setCustomTip] = useState("");
  const [generatedTip, setGeneratedTip] = useState(
    "Practice gratitude daily by taking a few minutes to reflect on the things you are thankful for."
  );

  const fetchAIQuote = async (keywords) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `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`, // Replace with your OpenAI API key (use env variable for production)
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Use a newer model for better results
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: `Generate an inspirational quote about: ${keywords}` }
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Check if 'choices' exists and has data
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content.trim(); // For chat models, the response is in message.content
      } else {
        throw new Error("No choices returned from the API.");
      }
    } catch (error) {
      console.error("Error fetching AI quote:", error.message);
      return "An error occurred while generating the quote. Please try again.";
    }
  };

  const fetchAITip = async (keywords) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_API_KEY_HERE`, // Replace with your OpenAI API key (use env variable for production)
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Use a newer model for better results
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: `Generate a helpful life tip about: ${keywords}` }
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Check if 'choices' exists and has data
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content.trim(); // For chat models, the response is in message.content
      } else {
        throw new Error("No choices returned from the API.");
      }
    } catch (error) {
      console.error("Error fetching AI tip:", error.message);
      return "An error occurred while generating the tip. Please try again.";
    }
  };

  // Handle quote generation
  const handleGenerateQuote = async () => {
    const result = await fetchAIQuote(customQuote);
    setGeneratedQuote(result);
  };

  // Handle tip generation
  const handleGenerateTip = async () => {
    const result = await fetchAITip(customTip);
    setGeneratedTip(result);
  };

  return (
    <div className="fadein">
    <div className="container">
      {/* Quote Section */}
      <h2 className="section-title">AI Quote of the Day</h2>
      <p className="output-box">{generatedQuote}</p>
      <input
        type="text"
        placeholder="Insert key words"
        value={customQuote}
        onChange={(e) => setCustomQuote(e.target.value)}
        className="input-box"
      />
      <button onClick={handleGenerateQuote} className="generate-button">
        Generate Quote
      </button>

      {/* Tip Section */}
      <h2 className="section-title">AI Tip of the Day</h2>
      <p className="output-box">{generatedTip}</p>
      <input
        type="text"
        placeholder="Insert key words"
        value={customTip}
        onChange={(e) => setCustomTip(e.target.value)}
        className="input-box"
      />
      <button onClick={handleGenerateTip} className="generate-button">
        Generate Tip
      </button>
    </div>
    </div>
  );
};

export default QuoteAndTipGenerator;

//Authorization: `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`, // Replace with your OpenAI API key
