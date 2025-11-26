import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getHistory, deleteFromHistory } from '../services/calcaptoServices';
import { restoreState } from '../actions/actions';

const History = (props) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const loadHistory = () => {
            const data = getHistory();
            setHistory(data);
        };

        loadHistory();
        window.addEventListener('historyUpdated', loadHistory);
        return () => window.removeEventListener('historyUpdated', loadHistory);
    }, []);

    const handleRestore = (itemData) => {
        props.restoreState(itemData);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = (e, id) => {
        e.stopPropagation(); // Prevent triggering restore
        if (deleteFromHistory(id)) {
            const updatedHistory = getHistory();
            setHistory(updatedHistory);
        }
    };

    if (history.length === 0) {
        return null;
    }

    return (
        <div className="history-list">
            <h2>Historial</h2>
            {history.map((item) => {
                const creditForm = item.data.jCreditForm || {};
                const result = item.data.result || item.data;

                return (
                    <div key={item.id} className="history-item" onClick={() => handleRestore(item.data)}>
                        <div className="history-content">
                            <div className="history-header">
                                <span className="history-date">{item.date}</span>
                                <button className="delete-btn" onClick={(e) => handleDelete(e, item.id)} title="Eliminar">
                                    ×
                                </button>
                            </div>
                            <div className="history-details-grid">
                                <div className="history-detail-item">
                                    <span className="detail-label">Cuota</span>
                                    <span className="detail-value primary">{result.valAcc}</span>
                                </div>
                                <div className="history-detail-item">
                                    <span className="detail-label">Plazo</span>
                                    <span className="detail-value">{creditForm.nMonths} meses</span>
                                </div>
                                <div className="history-detail-item">
                                    <span className="detail-label">Tasa</span>
                                    <span className="detail-value">{creditForm.nRateAn}%</span>
                                </div>
                                <div className="history-detail-item">
                                    <span className="detail-label">Crédito</span>
                                    <span className="detail-value">{result.valCredit}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const mapDispatchToProps = {
    restoreState
};

export default connect(null, mapDispatchToProps)(History);
