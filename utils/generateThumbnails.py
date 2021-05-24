import json
import os
import ffmpeg


def generate_thumb(season, episode):
    try:
        video_filename = os.path.join(
            'public\\dub\\resources\\videos', season, episode['id'] + '.mp4')
        image_filename = os.path.join(
            'public\\dub\\resources\\thumbnails', season, episode['id'] + '.png')
        (
            ffmpeg
            .input(video_filename, ss='0:02')
            .filter('scale', 1920, 1080)
            .output(image_filename, vframes=1)
            .run()
        )
    except Exception as e:
        print(e)
        

with open('public/dub/catalog.json') as f:
    catalog = json.load(f)

seasons = catalog['seasons']

for season in seasons:
    for episode in catalog['seasons'][season]['episodes']:
        if os.path.exists(os.path.join(
            'public\\dub\\resources\\thumbnails',
                season, episode['id'] + '.png')):
            print('thumbnail exists for', episode['title'])
        else:
            print('generating thumbnail for', episode['id'])
            generate_thumb(season, episode)
