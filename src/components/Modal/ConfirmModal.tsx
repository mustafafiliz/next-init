import { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import { colors } from '@/lib/colors';
type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onAccept: () => Promise<void | unknown>;
  cancelButton?: string;
  submitButton?: string;
};

export default function ConfirmModal({ open, onClose, title, description, onAccept, cancelButton = 'İptal', submitButton = 'Onayla' }: Props) {
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    try {
      await onAccept();
      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);
      onClose();
      return error;
    }
  };

  const Content = () => {
    return (
      <div style={{ maxWidth: '64rem' }}>
        <p style={{ marginBottom: '4rem', marginTop: '4rem', fontWeight: 300, lineHeight: '2.4rem' }}>{description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Button
            w100
            onClick={onClose}
            style={{ borderWidth: 1, borderStyle: 'solid', borderColor: colors.secondary }}
            bg={colors.transparent}
            color={colors.secondary}
            name={cancelButton}
          />
          <Button w100 loading={loading} onClick={handleAccept} bg={colors.secondary} color={colors.white} name={submitButton} />
        </div>
      </div>
    );
  };

  return <Modal title={title} open={open} onClose={onClose} content={<Content />} />;
}
