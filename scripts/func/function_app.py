import azure.functions as func
import logging
from youtube_transcript_api import YouTubeTranscriptApi

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

def get_transcript(video_id): # Get the video_id from the request
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        content = " ".join([ct["text"] for ct in transcript])
        return content
    except Exception as e:
        return "Subtitles Disabled"

@app.route(route="http_trigger")
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    videoId = req.get_json().get('videoId')
    # if not name:
    #     try:
    #         req_body = req.get_json()
    #     except ValueError:
    #         pass
    #     else:
    #         name = req_body.get('name')

    if videoId:
        res = get_transcript(videoId)
        return func.HttpResponse(res)
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )