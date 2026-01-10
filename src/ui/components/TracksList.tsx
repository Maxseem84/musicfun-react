import { TrackItem } from './TrackItem';
import { useTracks } from '../../bll/useTracks';
import styles from './tracks.module.css';

type Props = {
  selectedTrackId: string | null;
  onTrackSelected: (id: string | null) => void;
};

export function TracksList({ selectedTrackId, onTrackSelected }: Props) {
  const { tracks } = useTracks();
  if (tracks === null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }
  if (tracks.length === 0) {
    return (
      <div>
        <span>No tracks</span>
      </div>
    );
  }

  const handleResetClick = () => {
    onTrackSelected(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelected(trackId);
  };

  return (
    <div>
      <button onClick={handleResetClick}>Reset</button>
      <hr />
      <ul className={styles.tracks}>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              onSelect={handleClick}
              isSelected={track.id === selectedTrackId}
            />
          );
        })}
      </ul>
    </div>
  );
}
