from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Home / Backend Status
@app.route("/")
def home():
    return jsonify({
        "status": "success",
        "message": "AI LifeLens Backend is Running 🤖"
    })


# Smart Decision API
@app.route("/api/decision", methods=["POST"])
def decision():

    data = request.get_json()

    situation = data.get("situation", "").strip()

    if not situation:
        return jsonify({
            "error": "Please enter your situation."
        }), 400

    # Temporary AI response
    response = {
        "recommendation": "Analyze your priorities first.",
        "reason": "We received your situation successfully.",
        "next_step": "Set your most important task and start with it."
    }

    return jsonify(response)


# Progress Tracker API
@app.route("/api/progress", methods=["GET"])
def progress():

    progress_data = {
        "subject": "Python",
        "total_topics": 10,
        "completed_topics": 6,
        "progress": 60
    }

    return jsonify(progress_data)


# Run Flask Server
if __name__ == "__main__":
    app.run(debug=True)
