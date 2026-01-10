import { useState, useEffect } from 'react';
import { getTrack } from '../dal/api';
import { type GetTrackDetailsOutputData } from '../dal/api';

export function useTrackDetail(trackId: string | null) {
  const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailsOutputData | null>(null);
  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null);
      return;
    }
    const promise = getTrack(trackId);
    promise.then((json) => {
      setSelectedTrack(json.data);
    });
  }, [trackId]);
  return {
    selectedTrack,
  };
}
