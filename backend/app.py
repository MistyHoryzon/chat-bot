from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline


app = Flask(__name__)
CORS(app)  # Разрешает запросы с другого домена (React-приложение)

CORS(app, resources={r"/api/*": {"origins": "*"}})

# Инициализация языковой модели
qa_pipeline = pipeline("question-answering", model="distilbert-base-uncased")


@app.route('/api/ask', methods=['POST', 'OPTIONS'])
def ask_question(): 
    if request.method == 'OPTIONS':
        # Обработка предварительного запроса CORS
        return jsonify({}), 200

    data = request.json
    question = data.get('question')
    context = data.get('context', "Учебный год в университете начинается 1 сентября и заканчивается в июне.")

    if not question:
        return jsonify({"error": "Вопрос не предоставлен"}), 400

    # Пример обработки вопроса
    result = qa_pipeline(question=question, context=context)
    return jsonify({"answer": result['answer']})


if __name__ == '__main__':
    app.run(debug=True)
