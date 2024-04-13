from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)

@app.route('/transcript', methods=['GET'])
def get_transcript():
    video_id = request.args.get('video_id')  # Get the video_id from the request
    
    if not video_id:
        return jsonify({'error': 'Please provide a video_id parameter in the request.'}), 400

    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        output = ''
        for x in transcript:
            sentence = x['text']
            output += f' {sentence}\n'

        return jsonify({'transcript': output}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
