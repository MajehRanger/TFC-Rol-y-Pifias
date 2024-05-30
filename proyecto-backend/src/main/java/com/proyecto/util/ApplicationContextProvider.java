package com.proyecto.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class ApplicationContextProvider implements ApplicationContextAware {
    private static ApplicationContext applicationContext;

    public static <T> T getBean(Class<T> beanClass) { return applicationContext.getBean(beanClass);}

    @SuppressWarnings("null")
    @Override
    public void setApplicationContext(ApplicationContext context) throws BeansException  {
        applicationContext = context;
    }
}
