import { useTrackDetail } from '../../bll/useTrackDetail';
import styles from './track-details.module.css';

type Props = {
  trackId: string | null;
};

export function TrackDetail({ trackId }: Props) {
  const { selectedTrack } = useTrackDetail(trackId);

  return (
    <div className={styles.track}>
      <h2>Details</h2>
      {!selectedTrack && !trackId && 'Track is not selected'}
      {!selectedTrack && trackId && 'Loading...'}
      {selectedTrack && trackId && selectedTrack.id !== trackId && 'Loading...'}
      {selectedTrack && trackId && selectedTrack.id === trackId && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? 'No Lyrics'}</p>
        </div>
      )}
    </div>
  );
}
