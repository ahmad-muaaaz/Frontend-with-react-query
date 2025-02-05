import { notification } from 'antd';
import { isFulfilled, isRejectedWithValue } from '@reduxjs/toolkit';

// Configure which endpoints should be silent
const SILENT_ENDPOINTS = ['getTasks']; // Add endpoint names that shouldn't show notifications

export const notificationMiddleware = () => (next) => (action) => {
    // Extract endpoint name from action
    const endpointName = action?.meta?.arg?.endpointName;

    // Skip notifications for silent endpoints
    if (SILENT_ENDPOINTS.includes(endpointName)) {
        return next(action);
    }

    if (isFulfilled(action)) {
        const message = action.payload?.message;
        if (message) {
            notification.success({
                message: message,
                duration: 3,
                className: 'custom-notification-success',
            });
        }
    }

    if (isRejectedWithValue(action)) {
        const message = action.payload?.data?.message || 'Operation failed';
        notification.error({
            message: message,
            duration: 5,
            className: 'custom-notification-error',
        });
    }

    return next(action);
};
