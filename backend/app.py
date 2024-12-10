from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Разрешает запросы с другого домена (React-приложение)

@app.route('/api/test', methods=['GET'])
def test_endpoint():
    return jsonify({"message": "Backend работает!"})

if __name__ == '__main__':
    app.run(debug=True)
