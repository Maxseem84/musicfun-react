import { useEffect, useState } from 'react';
import { getTracks } from '../dal/api';
import { type TrackListItemOutput } from '../dal/api';

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);
  useEffect(() => {
    const promise = getTracks();
    promise.then((json) => setTracks(json.data));
  }, []);
  return { tracks };
}
