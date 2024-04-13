import csv
from youtube_transcript_api import YouTubeTranscriptApi

url = 'https://www.youtube.com/watch?v=VTvJOb2hJ6k&list=PLibNZv5Zd0dyCoQ6f4pdXUFnpAIlKgm3N&index=12'
video_id = url.replace('https://www.youtube.com/watch?v=', '')

transcript = YouTubeTranscriptApi.get_transcript(video_id)

# Define start and end timestamps for each segment in minute and second format
timestamps = [
    {"start": {"minutes": 0, "seconds": 23}, "end": {"minutes": 4, "seconds": 9}},      # 0:29 to 5:03 - Level 1: Child
    {"start": {"minutes": 4, "seconds": 10}, "end": {"minutes": 7, "seconds": 26}},     # 5:03 to 9:27 - Level 2: Teen
    {"start": {"minutes": 7, "seconds": 27}, "end": {"minutes": 14, "seconds": 44}},  # 9:27 to 13:52 - Level 3: College Student
    {"start": {"minutes": 14, "seconds": 45}, "end": {"minutes": 19, "seconds": 54}}, # 13:52 to 19:33 - Level 4: Grad Student
    {"start": {"minutes": 19, "seconds": 55}, "end": {"minutes": 29, "seconds": 36}}   # 19:33 to 24:11 - Level 5: Expert
]

# Function to convert minute:second format to seconds
def to_seconds(minutes, seconds):
    return minutes * 60 + seconds

# Append the paragraphs to the existing CSV file
csv_filename = 'transcript_segments.csv'
with open(csv_filename, 'a', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    
    for segment in timestamps:
        start_minutes = segment["start"]["minutes"]
        start_seconds = segment["start"]["seconds"]
        end_minutes = segment["end"]["minutes"]
        end_seconds = segment["end"]["seconds"]

        start_timestamp = to_seconds(start_minutes, start_seconds)
        end_timestamp = to_seconds(end_minutes, end_seconds)

        paragraph = ''
        for x in transcript:
            if start_timestamp <= x['start'] <= end_timestamp:
                sentence = x['text']
                paragraph += f'{sentence} '

        writer.writerow([paragraph.strip()])

print(f"Transcript segments have been appended to '{csv_filename}'.")